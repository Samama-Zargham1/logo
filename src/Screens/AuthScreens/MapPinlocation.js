import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, fontFamily } from '../../Utils/Config'
import GeneralText from '../../components/text/GeneralText'
import { heightPixel, pixelSizeVertical, widthPixel } from '../../Utils/Responsiveness'
import GradientPrimarybtn from '../../components/buttons/GradientPrimarybtn'
import SkipNow from '../../components/buttons/SkipNow'
import AuthHeader from '../../components/headers/AuthHeader'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { markers } from '../../Utils/Common'
import MapView from 'react-native-maps'
import { mapStyle } from '../../Utils/AppStyles'

const MapPinlocation = ({ navigation }) => {
    const [latLong, setlatLong] = useState({
        lat: '',
        lng: ''
    })
    var region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const LocationButton = () => {
        return (
            <TouchableOpacity>
                <Image
                    style={{ width: widthPixel(40), height: heightPixel(40) }}
                    source={require("../../assets/images/GetLocation.png")}
                />
            </TouchableOpacity>
        )
    }
    const mapRef = React.createRef();
    return (
        <View keyboardShouldPersistTaps="handled"
            style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader isLeftIcon={true} text={"Logo"} />
            <GeneralText text={"Pin your location on map"}
                lineHeight={heightPixel(25)}
                fontWeight={400}
                font={16}
                extraStyle={styles.extra} />
            <View style={styles.MapView}>
                <MapView
                    ref={mapRef}
                    style={{ height: '100%', width: '100%', borderRadius: 10, }}
                    region={region}
                    showsUserLocation={true}
                    showsMyLocationButton={true}

                    rotateEnabled={false}
                    loadingEnabled={true} >          
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker}
                        />
                    ))}
                </MapView>
            </View>
            <View style={{ flex: 3 }}>
                <GradientPrimarybtn top={25}
                    colorsArray={false}
                    onPress={() => navigation.navigate("YourFavCategories")}
                    text={"Continue"} />
            </View>

        </View>
    )
}


export default MapPinlocation

const styles = StyleSheet.create({
    extra: {
        marginTop: pixelSizeVertical(25),
        textAlign: "center", marginBottom: widthPixel(16)
    },
    MapView: {
        width: widthPixel(325),
        flex: 13,
        zIndex: -1,
        borderRadius: 10,
        overflow: 'hidden',
        alignSelf: "center"
    }
})