// tslint:disable no-var-requires
/*
 * This file is only a stub to make './implementation' resolve to the right module.
 */

import WebWorkerImplementation from "./implementation.browser"
import TinyWorkerImplementation from "./implementation.tiny-worker"

const runningInNode = typeof process !== 'undefined' && process.arch !== 'browser' && 'pid' in process

export default runningInNode
  ? TinyWorkerImplementation
  : WebWorkerImplementation
