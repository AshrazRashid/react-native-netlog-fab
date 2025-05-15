package com.netlogfab

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = NetlogFabModule.NAME)
class NetlogFabModule(reactContext: ReactApplicationContext) :
  NativeNetlogFabSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  companion object {
    const val NAME = "NetlogFab"
  }
}
