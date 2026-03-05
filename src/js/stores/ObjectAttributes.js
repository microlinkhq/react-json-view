import { EventEmitter } from 'events'
import dispatcher from './../helpers/dispatcher'
import { toType } from './../helpers/util'

const UPDATED_SRC_KEY = 'updated_src'
const NEW_VALUE_KEY = 'new_value'
const VARIABLE_REMOVED_KEY = 'variable_removed'

// store persistent display attributes for objects and arrays
class ObjectAttributes extends EventEmitter {
  objects = {}

  set = (rjvId, name, key, value) => {
    if (this.objects[rjvId] === undefined) {
      this.objects[rjvId] = {}
    }
    if (this.objects[rjvId][name] === undefined) {
      this.objects[rjvId][name] = {}
    }
    this.objects[rjvId][name][key] = value
  }

  get = (rjvId, name, key, defaultValue) => {
    if (
      this.objects[rjvId] === undefined ||
      this.objects[rjvId][name] === undefined ||
      this.objects[rjvId][name][key] === undefined
    ) {
      return defaultValue
    }
    return this.objects[rjvId][name][key]
  }

  handleAction = action => {
    const { rjvId, data, name } = action
    switch (name) {
      case 'RESET':
        this.emit('reset-' + rjvId)
        break
      case 'VARIABLE_UPDATED':
        action.data[UPDATED_SRC_KEY] = this.updateSrc(rjvId, data)
        this.set(rjvId, 'action', 'variable-update', {
          ...data,
          type: 'variable-edited'
        })
        this.emit('variable-update-' + rjvId)
        break
      case 'VARIABLE_REMOVED':
        action.data[UPDATED_SRC_KEY] = this.updateSrc(rjvId, data)
        this.set(rjvId, 'action', 'variable-update', {
          ...data,
          type: 'variable-removed'
        })
        this.emit('variable-update-' + rjvId)
        break
      case 'VARIABLE_ADDED':
        action.data[UPDATED_SRC_KEY] = this.updateSrc(rjvId, data)
        this.set(rjvId, 'action', 'variable-update', {
          ...data,
          type: 'variable-added'
        })
        this.emit('variable-update-' + rjvId)
        break
      case 'ADD_VARIABLE_KEY_REQUEST':
        this.set(rjvId, 'action', 'new-key-request', data)
        this.emit('add-key-request-' + rjvId)
        break
    }
  }

  updateSrc = (rjvId, request) => {
    const { name, namespace } = request
    const newValue = request[NEW_VALUE_KEY]
    const variableRemoved = request[VARIABLE_REMOVED_KEY]

    namespace.shift()

    // deepy copy src
    const src = this.get(rjvId, 'global', 'src')
    // deep copy of src variable
    let updatedSrc = this.deepCopy(src, [...namespace])

    // point at current index
    let walk = updatedSrc
    for (const idx of namespace) {
      walk = walk[idx]
    }

    if (variableRemoved) {
      if (toType(walk) === 'array') {
        walk.splice(name, 1)
      } else {
        delete walk[name]
      }
    } else {
      // update copied variable at specified namespace
      if (name !== null) {
        walk[name] = newValue
      } else {
        updatedSrc = newValue
      }
    }

    this.set(rjvId, 'global', 'src', updatedSrc)

    return updatedSrc
  }

  deepCopy = (src, copyNamespace) => {
    const type = toType(src)
    let result
    const idx = copyNamespace.shift()
    if (type === 'array') {
      result = [...src]
    } else if (type === 'object') {
      result = { ...src }
    }
    if (idx !== undefined) {
      result[idx] = this.deepCopy(src[idx], copyNamespace)
    }
    return result
  }
}

const attributeStore = new ObjectAttributes()
dispatcher.register(attributeStore.handleAction.bind(attributeStore))
export default attributeStore
