class Dispatcher {
  handler = () => {}

  register (handler) {
    this.handler = handler
  }

  dispatch (data) {
    this.handler?.(data)
  }
}

if (!globalThis.__globalDispatcherInstance) {
  globalThis.__globalDispatcherInstance = new Dispatcher()
}

const dispatcher = globalThis.__globalDispatcherInstance
export default dispatcher
