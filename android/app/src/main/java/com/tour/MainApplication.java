package com.tour;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;


import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.BV.LinearGradient.LinearGradientPackage;
import android.content.Intent;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  // fb
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();
    protected static CallbackManager getCallbackManager() {
      return mCallbackManager;
    }

    // @Override
    // public void onActivityResult(int requestCode, int resultCode, Intent data) {
    //     super.onActivityResult(requestCode, resultCode, data);
    //     MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    // }
    
  //

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),     
          new FBSDKPackage(mCallbackManager),
          new LinearGradientPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    AppEventsLogger.activateApp(this);
    SoLoader.init(this, /* native exopackage */ false);
  }


}
