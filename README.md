# react-native-firebaseを使ってFacebook認証を実現する（iOS）

使用したライブラリ
```
react-native-firebase
react-native-fbsdk
```
インストールした後はそれぞれ「npm link」でリンクを貼っておく

0.ライブラリのインストール、Firebaseの登録、FacebookDeveloperの登録

1.React Native Firebaseのドキュメントを読みながらセットアップしていく
[https://rnfirebase.io/docs/v3.2.x/installation/initial-setup](https://rnfirebase.io/docs/v3.2.x/installation/initial-setup)

GoogleService-Info.plistをFirebaseからダウンロードして、XCodeを立ち上げてInfo.plistの下に貼り付ける。

* AppDelegate.mでFirebaseを定義
* PodFileを作成して、「pod 'Firebase/Core'」、「pod 'Firebase/Auth'」を追加
* XCodeのOther Linker Flagsに「$(inherited)」を追記

2. Facebook Developerの「Quick Start」に即して作業を進めていく
この序盤でLogin KitをダウンロードしてXCodeにドラッグするような指示があるのですが、ここはスキップして、代わりに「pod 'FBSDKCoreKit'」、「pod 'FBSDKLoginKit'」、「pod 'FBSDKShareKit'」をそれぞれ記述してpod install

3. Quick Startを終わらせたら、ドキュメントにあるコードを貼り付けてonPressで実行
[https://rnfirebase.io/docs/v3.2.x/auth/social-auth](https://rnfirebase.io/docs/v3.2.x/auth/social-auth)
