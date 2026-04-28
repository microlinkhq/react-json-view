## 1.31.19 (2026-04-28)
## 1.31.18 (2026-04-10)
## 1.31.17 (2026-04-09)
## 1.31.16 (2026-04-03)
## 1.31.15 (2026-03-26)
## 1.31.14 (2026-03-18)
## 1.31.13 (2026-03-18)
## 1.31.12 (2026-03-17)
## 1.31.11 (2026-03-17)
## 1.31.10 (2026-03-16)
## 1.31.9 (2026-03-16)
## 1.31.8 (2026-03-11)
## 1.31.7 (2026-03-11)
## 1.31.6 (2026-03-10)
## 1.31.5 (2026-03-10)
## 1.31.4 (2026-03-08)
## 1.31.3 (2026-03-07)
## 1.31.2 (2026-03-07)
## 1.31.1 (2026-03-05)
## 1.31.0 (2026-03-05)

### Features

* add types field to package.json ([2e6320a](https://github.com/microlinkhq/react-json-view/commit/2e6320af1cb709536355218c79357842dd64d900))
* **dev server:** add example of name as jsx element ([84ada17](https://github.com/microlinkhq/react-json-view/commit/84ada17617ad1df0e748e5cf6383f9cdcefa6e02))
* Enhance VariableEditor to support BigNumber type handling ([98d2d1e](https://github.com/microlinkhq/react-json-view/commit/98d2d1e508f7121f46c2513435949a69454a75bf))
* **json viewer:** add handling namespace when is an react object ([e11b60a](https://github.com/microlinkhq/react-json-view/commit/e11b60af87fa1755554cb5c846d1d49ea12d131e))
* show comma option ([bdb3907](https://github.com/microlinkhq/react-json-view/commit/bdb39074635ee84cb2b2d18e7e5f746ae9b0883f))
* trigger onSelect when clicking keys ([6db9f85](https://github.com/microlinkhq/react-json-view/commit/6db9f85e3dc4a7d2ad6a04414f498d49201de284))
* **types:** add JSX.Element as name prop type ([ebd8aed](https://github.com/microlinkhq/react-json-view/commit/ebd8aed8246742ebc41776a8a0bb489b8e711138))
* 优化 rjvId 生成方式，添加随机字符串增加唯一性 ([6d85757](https://github.com/microlinkhq/react-json-view/commit/6d85757b6e51ddb9c7cbf4f99c9688cf965bd90f))

### Bug Fixes

* action config ([e150a8a](https://github.com/microlinkhq/react-json-view/commit/e150a8a91dc655e583bc43939b0a64affa0c3bdd))
* add back build step ([0ddc229](https://github.com/microlinkhq/react-json-view/commit/0ddc2293be9edb60067065e4a1a0603dbcfcf05a))
* add legacy ssl flag ([4005834](https://github.com/microlinkhq/react-json-view/commit/4005834bb4234ddfdef66f2173a53a686641cb21))
* add missed devDeps in new create-react-app ([5275cd4](https://github.com/microlinkhq/react-json-view/commit/5275cd446f7d4202b06f4a0d048092066a6b5f5b))
* AutosizeTextarea `ref` prop ([84b8110](https://github.com/microlinkhq/react-json-view/commit/84b8110b3ee2872ce937439f02275645fb7d17a9))
* Fix toggleCollapsed handling sparse arrays ([656e2d0](https://github.com/microlinkhq/react-json-view/commit/656e2d0dda5c77cd89b3b86c8487b0fb1000d7d5))
* function call ([86bbd60](https://github.com/microlinkhq/react-json-view/commit/86bbd60caef8d80b812a45c8ea9326df62fcb02f))
* **json viewer:** add support for functional components ([f478f55](https://github.com/microlinkhq/react-json-view/commit/f478f55aa2b9dbe730f9638485d9c584ccbbcc45))
* missing quotesOnKeys props in TS typings ([25f5205](https://github.com/microlinkhq/react-json-view/commit/25f5205f78663a37610295268bf3f7c669592681))
* remove unnecessary CSS ([990cf94](https://github.com/microlinkhq/react-json-view/commit/990cf94da62202912baca7d1c5584daf9521a092))
* replace class attribute by classname ([e38bab4](https://github.com/microlinkhq/react-json-view/commit/e38bab4f5468bcd77112564ed2a34fb5b6d550a6))
* resolve test failures in Node 20+ and below Node 17 ([c00d5cc](https://github.com/microlinkhq/react-json-view/commit/c00d5cc907c6200b6c7d9076c9e4a0a0bb8433b6))
* rolling back the changes directly ([4c17310](https://github.com/microlinkhq/react-json-view/commit/4c173108ffc74974864ff8dbb845f5d4c24caed4))
* **string data type:** use camelcase on inline style ([d578398](https://github.com/microlinkhq/react-json-view/commit/d578398187908db8d553f8e83f8072de04b89916))
* use babel register ([6244e18](https://github.com/microlinkhq/react-json-view/commit/6244e1830e297e9318dc9c31c0690366b62b12a3))
* use quotes ([0df577c](https://github.com/microlinkhq/react-json-view/commit/0df577c362594491d857ee62f524591007f78136))

### Reverts

* Revert "Release/1.27.1 (#11)" ([b8c14d8](https://github.com/microlinkhq/react-json-view/commit/b8c14d84f1ed360ca273769b1c8efce4dca92966)), closes [#11](https://github.com/microlinkhq/react-json-view/issues/11)
* Revert "chore: change package namespace" ([66d0f51](https://github.com/microlinkhq/react-json-view/commit/66d0f5194f7adbe71a6a1bc3a233efa670610250))
* Revert "chore: update package data structure" ([41b7da6](https://github.com/microlinkhq/react-json-view/commit/41b7da6f17c438d19887742c553e004f4d780192))
* Revert "Add custom button test (#7)" ([8d9f004](https://github.com/microlinkhq/react-json-view/commit/8d9f0042d35ed51f9e4a10e835b363e2fa6b1060)), closes [#7](https://github.com/microlinkhq/react-json-view/issues/7)
* Revert "chore: update project version and add contributor" ([9a2b144](https://github.com/microlinkhq/react-json-view/commit/9a2b144b6efefa1a55c80924c1d36f4d99e4bc3a))
## 1.30.2 (2026-03-05)
## 1.30.1 (2026-03-05)
## 1.30.0 (2026-03-05)

### Features

* add types field to package.json ([2e6320a](https://github.com/microlinkhq/react-json-view/commit/2e6320af1cb709536355218c79357842dd64d900))
* **dev server:** add example of name as jsx element ([84ada17](https://github.com/microlinkhq/react-json-view/commit/84ada17617ad1df0e748e5cf6383f9cdcefa6e02))
* Enhance VariableEditor to support BigNumber type handling ([98d2d1e](https://github.com/microlinkhq/react-json-view/commit/98d2d1e508f7121f46c2513435949a69454a75bf))
* **json viewer:** add handling namespace when is an react object ([e11b60a](https://github.com/microlinkhq/react-json-view/commit/e11b60af87fa1755554cb5c846d1d49ea12d131e))
* show comma option ([bdb3907](https://github.com/microlinkhq/react-json-view/commit/bdb39074635ee84cb2b2d18e7e5f746ae9b0883f))
* trigger onSelect when clicking keys ([6db9f85](https://github.com/microlinkhq/react-json-view/commit/6db9f85e3dc4a7d2ad6a04414f498d49201de284))
* **types:** add JSX.Element as name prop type ([ebd8aed](https://github.com/microlinkhq/react-json-view/commit/ebd8aed8246742ebc41776a8a0bb489b8e711138))
* 优化 rjvId 生成方式，添加随机字符串增加唯一性 ([6d85757](https://github.com/microlinkhq/react-json-view/commit/6d85757b6e51ddb9c7cbf4f99c9688cf965bd90f))

### Bug Fixes

* action config ([e150a8a](https://github.com/microlinkhq/react-json-view/commit/e150a8a91dc655e583bc43939b0a64affa0c3bdd))
* add back build step ([0ddc229](https://github.com/microlinkhq/react-json-view/commit/0ddc2293be9edb60067065e4a1a0603dbcfcf05a))
* add legacy ssl flag ([4005834](https://github.com/microlinkhq/react-json-view/commit/4005834bb4234ddfdef66f2173a53a686641cb21))
* add missed devDeps in new create-react-app ([5275cd4](https://github.com/microlinkhq/react-json-view/commit/5275cd446f7d4202b06f4a0d048092066a6b5f5b))
* AutosizeTextarea `ref` prop ([84b8110](https://github.com/microlinkhq/react-json-view/commit/84b8110b3ee2872ce937439f02275645fb7d17a9))
* Fix toggleCollapsed handling sparse arrays ([656e2d0](https://github.com/microlinkhq/react-json-view/commit/656e2d0dda5c77cd89b3b86c8487b0fb1000d7d5))
* function call ([86bbd60](https://github.com/microlinkhq/react-json-view/commit/86bbd60caef8d80b812a45c8ea9326df62fcb02f))
* **json viewer:** add support for functional components ([f478f55](https://github.com/microlinkhq/react-json-view/commit/f478f55aa2b9dbe730f9638485d9c584ccbbcc45))
* missing quotesOnKeys props in TS typings ([25f5205](https://github.com/microlinkhq/react-json-view/commit/25f5205f78663a37610295268bf3f7c669592681))
* remove unnecessary CSS ([990cf94](https://github.com/microlinkhq/react-json-view/commit/990cf94da62202912baca7d1c5584daf9521a092))
* replace class attribute by classname ([e38bab4](https://github.com/microlinkhq/react-json-view/commit/e38bab4f5468bcd77112564ed2a34fb5b6d550a6))
* resolve test failures in Node 20+ and below Node 17 ([c00d5cc](https://github.com/microlinkhq/react-json-view/commit/c00d5cc907c6200b6c7d9076c9e4a0a0bb8433b6))
* rolling back the changes directly ([4c17310](https://github.com/microlinkhq/react-json-view/commit/4c173108ffc74974864ff8dbb845f5d4c24caed4))
* **string data type:** use camelcase on inline style ([d578398](https://github.com/microlinkhq/react-json-view/commit/d578398187908db8d553f8e83f8072de04b89916))
* use babel register ([6244e18](https://github.com/microlinkhq/react-json-view/commit/6244e1830e297e9318dc9c31c0690366b62b12a3))
* use quotes ([0df577c](https://github.com/microlinkhq/react-json-view/commit/0df577c362594491d857ee62f524591007f78136))

### Reverts

* Revert "Release/1.27.1 (#11)" ([b8c14d8](https://github.com/microlinkhq/react-json-view/commit/b8c14d84f1ed360ca273769b1c8efce4dca92966)), closes [#11](https://github.com/microlinkhq/react-json-view/issues/11)
* Revert "chore: change package namespace" ([66d0f51](https://github.com/microlinkhq/react-json-view/commit/66d0f5194f7adbe71a6a1bc3a233efa670610250))
* Revert "chore: update package data structure" ([41b7da6](https://github.com/microlinkhq/react-json-view/commit/41b7da6f17c438d19887742c553e004f4d780192))
* Revert "Add custom button test (#7)" ([8d9f004](https://github.com/microlinkhq/react-json-view/commit/8d9f0042d35ed51f9e4a10e835b363e2fa6b1060)), closes [#7](https://github.com/microlinkhq/react-json-view/issues/7)
* Revert "chore: update project version and add contributor" ([9a2b144](https://github.com/microlinkhq/react-json-view/commit/9a2b144b6efefa1a55c80924c1d36f4d99e4bc3a))
## 1.29.0 (2026-03-05)

### Features

* add types field to package.json ([2e6320a](https://github.com/microlinkhq/react-json-view/commit/2e6320af1cb709536355218c79357842dd64d900))
* **dev server:** add example of name as jsx element ([84ada17](https://github.com/microlinkhq/react-json-view/commit/84ada17617ad1df0e748e5cf6383f9cdcefa6e02))
* Enhance VariableEditor to support BigNumber type handling ([98d2d1e](https://github.com/microlinkhq/react-json-view/commit/98d2d1e508f7121f46c2513435949a69454a75bf))
* **json viewer:** add handling namespace when is an react object ([e11b60a](https://github.com/microlinkhq/react-json-view/commit/e11b60af87fa1755554cb5c846d1d49ea12d131e))
* show comma option ([bdb3907](https://github.com/microlinkhq/react-json-view/commit/bdb39074635ee84cb2b2d18e7e5f746ae9b0883f))
* trigger onSelect when clicking keys ([6db9f85](https://github.com/microlinkhq/react-json-view/commit/6db9f85e3dc4a7d2ad6a04414f498d49201de284))
* **types:** add JSX.Element as name prop type ([ebd8aed](https://github.com/microlinkhq/react-json-view/commit/ebd8aed8246742ebc41776a8a0bb489b8e711138))
* 优化 rjvId 生成方式，添加随机字符串增加唯一性 ([6d85757](https://github.com/microlinkhq/react-json-view/commit/6d85757b6e51ddb9c7cbf4f99c9688cf965bd90f))

### Bug Fixes

* action config ([e150a8a](https://github.com/microlinkhq/react-json-view/commit/e150a8a91dc655e583bc43939b0a64affa0c3bdd))
* add back build step ([0ddc229](https://github.com/microlinkhq/react-json-view/commit/0ddc2293be9edb60067065e4a1a0603dbcfcf05a))
* add legacy ssl flag ([4005834](https://github.com/microlinkhq/react-json-view/commit/4005834bb4234ddfdef66f2173a53a686641cb21))
* add missed devDeps in new create-react-app ([5275cd4](https://github.com/microlinkhq/react-json-view/commit/5275cd446f7d4202b06f4a0d048092066a6b5f5b))
* AutosizeTextarea `ref` prop ([84b8110](https://github.com/microlinkhq/react-json-view/commit/84b8110b3ee2872ce937439f02275645fb7d17a9))
* Fix toggleCollapsed handling sparse arrays ([656e2d0](https://github.com/microlinkhq/react-json-view/commit/656e2d0dda5c77cd89b3b86c8487b0fb1000d7d5))
* function call ([86bbd60](https://github.com/microlinkhq/react-json-view/commit/86bbd60caef8d80b812a45c8ea9326df62fcb02f))
* **json viewer:** add support for functional components ([f478f55](https://github.com/microlinkhq/react-json-view/commit/f478f55aa2b9dbe730f9638485d9c584ccbbcc45))
* missing quotesOnKeys props in TS typings ([25f5205](https://github.com/microlinkhq/react-json-view/commit/25f5205f78663a37610295268bf3f7c669592681))
* remove unnecessary CSS ([990cf94](https://github.com/microlinkhq/react-json-view/commit/990cf94da62202912baca7d1c5584daf9521a092))
* replace class attribute by classname ([e38bab4](https://github.com/microlinkhq/react-json-view/commit/e38bab4f5468bcd77112564ed2a34fb5b6d550a6))
* resolve test failures in Node 20+ and below Node 17 ([c00d5cc](https://github.com/microlinkhq/react-json-view/commit/c00d5cc907c6200b6c7d9076c9e4a0a0bb8433b6))
* rolling back the changes directly ([4c17310](https://github.com/microlinkhq/react-json-view/commit/4c173108ffc74974864ff8dbb845f5d4c24caed4))
* **string data type:** use camelcase on inline style ([d578398](https://github.com/microlinkhq/react-json-view/commit/d578398187908db8d553f8e83f8072de04b89916))
* use babel register ([6244e18](https://github.com/microlinkhq/react-json-view/commit/6244e1830e297e9318dc9c31c0690366b62b12a3))
* use quotes ([0df577c](https://github.com/microlinkhq/react-json-view/commit/0df577c362594491d857ee62f524591007f78136))

### Reverts

* Revert "Release/1.27.1 (#11)" ([b8c14d8](https://github.com/microlinkhq/react-json-view/commit/b8c14d84f1ed360ca273769b1c8efce4dca92966)), closes [#11](https://github.com/microlinkhq/react-json-view/issues/11)
* Revert "chore: change package namespace" ([66d0f51](https://github.com/microlinkhq/react-json-view/commit/66d0f5194f7adbe71a6a1bc3a233efa670610250))
* Revert "chore: update package data structure" ([41b7da6](https://github.com/microlinkhq/react-json-view/commit/41b7da6f17c438d19887742c553e004f4d780192))
* Revert "Add custom button test (#7)" ([8d9f004](https://github.com/microlinkhq/react-json-view/commit/8d9f0042d35ed51f9e4a10e835b363e2fa6b1060)), closes [#7](https://github.com/microlinkhq/react-json-view/issues/7)
* Revert "chore: update project version and add contributor" ([9a2b144](https://github.com/microlinkhq/react-json-view/commit/9a2b144b6efefa1a55c80924c1d36f4d99e4bc3a))
## 1.28.1 (2026-03-05)
## 1.28.0 (2026-03-05)

### Features

* add types field to package.json ([2e6320a](https://github.com/microlinkhq/react-json-view/commit/2e6320af1cb709536355218c79357842dd64d900))
* **dev server:** add example of name as jsx element ([84ada17](https://github.com/microlinkhq/react-json-view/commit/84ada17617ad1df0e748e5cf6383f9cdcefa6e02))
* Enhance VariableEditor to support BigNumber type handling ([98d2d1e](https://github.com/microlinkhq/react-json-view/commit/98d2d1e508f7121f46c2513435949a69454a75bf))
* **json viewer:** add handling namespace when is an react object ([e11b60a](https://github.com/microlinkhq/react-json-view/commit/e11b60af87fa1755554cb5c846d1d49ea12d131e))
* show comma option ([bdb3907](https://github.com/microlinkhq/react-json-view/commit/bdb39074635ee84cb2b2d18e7e5f746ae9b0883f))
* trigger onSelect when clicking keys ([6db9f85](https://github.com/microlinkhq/react-json-view/commit/6db9f85e3dc4a7d2ad6a04414f498d49201de284))
* **types:** add JSX.Element as name prop type ([ebd8aed](https://github.com/microlinkhq/react-json-view/commit/ebd8aed8246742ebc41776a8a0bb489b8e711138))
* 优化 rjvId 生成方式，添加随机字符串增加唯一性 ([6d85757](https://github.com/microlinkhq/react-json-view/commit/6d85757b6e51ddb9c7cbf4f99c9688cf965bd90f))

### Bug Fixes

* action config ([e150a8a](https://github.com/microlinkhq/react-json-view/commit/e150a8a91dc655e583bc43939b0a64affa0c3bdd))
* add back build step ([0ddc229](https://github.com/microlinkhq/react-json-view/commit/0ddc2293be9edb60067065e4a1a0603dbcfcf05a))
* add legacy ssl flag ([4005834](https://github.com/microlinkhq/react-json-view/commit/4005834bb4234ddfdef66f2173a53a686641cb21))
* add missed devDeps in new create-react-app ([5275cd4](https://github.com/microlinkhq/react-json-view/commit/5275cd446f7d4202b06f4a0d048092066a6b5f5b))
* AutosizeTextarea `ref` prop ([84b8110](https://github.com/microlinkhq/react-json-view/commit/84b8110b3ee2872ce937439f02275645fb7d17a9))
* Fix toggleCollapsed handling sparse arrays ([656e2d0](https://github.com/microlinkhq/react-json-view/commit/656e2d0dda5c77cd89b3b86c8487b0fb1000d7d5))
* function call ([86bbd60](https://github.com/microlinkhq/react-json-view/commit/86bbd60caef8d80b812a45c8ea9326df62fcb02f))
* **json viewer:** add support for functional components ([f478f55](https://github.com/microlinkhq/react-json-view/commit/f478f55aa2b9dbe730f9638485d9c584ccbbcc45))
* missing quotesOnKeys props in TS typings ([25f5205](https://github.com/microlinkhq/react-json-view/commit/25f5205f78663a37610295268bf3f7c669592681))
* remove unnecessary CSS ([990cf94](https://github.com/microlinkhq/react-json-view/commit/990cf94da62202912baca7d1c5584daf9521a092))
* replace class attribute by classname ([e38bab4](https://github.com/microlinkhq/react-json-view/commit/e38bab4f5468bcd77112564ed2a34fb5b6d550a6))
* resolve test failures in Node 20+ and below Node 17 ([c00d5cc](https://github.com/microlinkhq/react-json-view/commit/c00d5cc907c6200b6c7d9076c9e4a0a0bb8433b6))
* rolling back the changes directly ([4c17310](https://github.com/microlinkhq/react-json-view/commit/4c173108ffc74974864ff8dbb845f5d4c24caed4))
* **string data type:** use camelcase on inline style ([d578398](https://github.com/microlinkhq/react-json-view/commit/d578398187908db8d553f8e83f8072de04b89916))
* use babel register ([6244e18](https://github.com/microlinkhq/react-json-view/commit/6244e1830e297e9318dc9c31c0690366b62b12a3))
* use quotes ([0df577c](https://github.com/microlinkhq/react-json-view/commit/0df577c362594491d857ee62f524591007f78136))

### Reverts

* Revert "Release/1.27.1 (#11)" ([b8c14d8](https://github.com/microlinkhq/react-json-view/commit/b8c14d84f1ed360ca273769b1c8efce4dca92966)), closes [#11](https://github.com/microlinkhq/react-json-view/issues/11)
* Revert "chore: change package namespace" ([66d0f51](https://github.com/microlinkhq/react-json-view/commit/66d0f5194f7adbe71a6a1bc3a233efa670610250))
* Revert "chore: update package data structure" ([41b7da6](https://github.com/microlinkhq/react-json-view/commit/41b7da6f17c438d19887742c553e004f4d780192))
* Revert "Add custom button test (#7)" ([8d9f004](https://github.com/microlinkhq/react-json-view/commit/8d9f0042d35ed51f9e4a10e835b363e2fa6b1060)), closes [#7](https://github.com/microlinkhq/react-json-view/issues/7)
* Revert "chore: update project version and add contributor" ([9a2b144](https://github.com/microlinkhq/react-json-view/commit/9a2b144b6efefa1a55c80924c1d36f4d99e4bc3a))
## 1.27.2 (2026-03-05)
# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.27.1](https://github.com/microlinkhq/react-json-view/compare/v1.27.0...v1.27.1) (2026-01-11)


### Bug Fixes

* Fix toggleCollapsed handling sparse arrays ([656e2d0](https://github.com/microlinkhq/react-json-view/commit/656e2d0dda5c77cd89b3b86c8487b0fb1000d7d5))

## [1.27.0](https://github.com/microlinkhq/react-json-view/compare/v1.26.2...v1.27.0) (2025-08-01)


### Features

* add custom buttons to rows according to value type ([#4](https://github.com/microlinkhq/react-json-view/issues/4)) ([e8df37a](https://github.com/microlinkhq/react-json-view/commit/e8df37aa76e2eaeb586a63a6b5dd1cc0c05892b4))
* show comma option ([bdb3907](https://github.com/microlinkhq/react-json-view/commit/bdb39074635ee84cb2b2d18e7e5f746ae9b0883f))


### Bug Fixes

* replace class attribute by classname ([e38bab4](https://github.com/microlinkhq/react-json-view/commit/e38bab4f5468bcd77112564ed2a34fb5b6d550a6))
* **string data type:** use camelcase on inline style ([d578398](https://github.com/microlinkhq/react-json-view/commit/d578398187908db8d553f8e83f8072de04b89916))
* use className instead of class in React components ([#1](https://github.com/microlinkhq/react-json-view/issues/1)) ([108e1a8](https://github.com/microlinkhq/react-json-view/commit/108e1a8d406c3420ebc938fb1c6258feab5a928d))

### [1.26.2](https://github.com/microlinkhq/react-json-view/compare/v1.26.1...v1.26.2) (2025-05-16)

### [1.26.1](https://github.com/microlinkhq/react-json-view/compare/v1.26.0...v1.26.1) (2025-02-15)


### Bug Fixes

* resolve test failures in Node 20+ and below Node 17 ([c00d5cc](https://github.com/microlinkhq/react-json-view/commit/c00d5cc907c6200b6c7d9076c9e4a0a0bb8433b6))
* rolling back the changes directly ([4c17310](https://github.com/microlinkhq/react-json-view/commit/4c173108ffc74974864ff8dbb845f5d4c24caed4))

## [1.26.0](https://github.com/microlinkhq/react-json-view/compare/v1.25.0...v1.26.0) (2025-02-13)


### Features

* 优化 rjvId 生成方式，添加随机字符串增加唯一性 ([6d85757](https://github.com/microlinkhq/react-json-view/commit/6d85757b6e51ddb9c7cbf4f99c9688cf965bd90f))

## [1.25.0](https://github.com/microlinkhq/react-json-view/compare/v1.24.1...v1.25.0) (2025-02-12)


### Features

* Enhance VariableEditor to support BigNumber type handling ([98d2d1e](https://github.com/microlinkhq/react-json-view/commit/98d2d1e508f7121f46c2513435949a69454a75bf))

### [1.24.1](https://github.com/microlinkhq/react-json-view/compare/v1.24.0...v1.24.1) (2025-02-12)

## [1.24.0](https://github.com/microlinkhq/react-json-view/compare/v1.23.4...v1.24.0) (2024-12-25)

### [1.23.4](https://github.com/microlinkhq/react-json-view/compare/v1.23.3...v1.23.4) (2024-10-25)

### [1.23.3](https://github.com/microlinkhq/react-json-view/compare/v1.23.2...v1.23.3) (2024-09-27)


### Bug Fixes

* function call ([86bbd60](https://github.com/microlinkhq/react-json-view/commit/86bbd60caef8d80b812a45c8ea9326df62fcb02f))

### [1.23.2](https://github.com/microlinkhq/react-json-view/compare/v1.23.1...v1.23.2) (2024-09-22)

- function call ([86bbd60](https://github.com/microlinkhq/react-json-view/commit/86bbd60caef8d80b812a45c8ea9326df62fcb02f))

### [1.23.2](https://github.com/microlinkhq/react-json-view/compare/v1.23.1...v1.23.2) (2024-09-22)

### Bug Fixes

- add legacy ssl flag ([4005834](https://github.com/microlinkhq/react-json-view/commit/4005834bb4234ddfdef66f2173a53a686641cb21))

### [1.23.1](https://github.com/microlinkhq/react-json-view/compare/v1.23.0...v1.23.1) (2024-07-02)

## [1.23.0](https://github.com/microlinkhq/react-json-view/compare/v1.22.2...v1.23.0) (2023-10-26)

### Features

- **dev server:** add example of name as jsx element ([84ada17](https://github.com/microlinkhq/react-json-view/commit/84ada17617ad1df0e748e5cf6383f9cdcefa6e02))
- **json viewer:** add handling namespace when is an react object ([e11b60a](https://github.com/microlinkhq/react-json-view/commit/e11b60af87fa1755554cb5c846d1d49ea12d131e))
- **types:** add JSX.Element as name prop type ([ebd8aed](https://github.com/microlinkhq/react-json-view/commit/ebd8aed8246742ebc41776a8a0bb489b8e711138))

### Bug Fixes

- add missed devDeps in new create-react-app ([5275cd4](https://github.com/microlinkhq/react-json-view/commit/5275cd446f7d4202b06f4a0d048092066a6b5f5b))
- **json viewer:** add support for functional components ([f478f55](https://github.com/microlinkhq/react-json-view/commit/f478f55aa2b9dbe730f9638485d9c584ccbbcc45))

### [1.22.2](https://github.com/microlinkhq/react-json-view/compare/v1.22.1...v1.22.2) (2022-06-27)

### [1.22.1](https://github.com/microlinkhq/react-json-view/compare/v1.22.0...v1.22.1) (2022-05-11)
