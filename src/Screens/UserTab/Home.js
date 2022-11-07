import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS } from '../../Utils/Config'
import AuthHeader from '../../components/headers/AuthHeader'

const Home = () => {
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled"
      style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <AuthHeader isLeftIcon={true} isDrawer={true}
         text={"Logo"} />
    </KeyboardAwareScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})