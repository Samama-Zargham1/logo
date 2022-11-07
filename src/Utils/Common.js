import ImagePicker from 'react-native-image-crop-picker';

const ImageFromGallrey = (callBack) => {
    ImagePicker.openPicker({
        width: 1000,
        height: 1200,
        // cropping: true,
    }).then(imagePath => {
        console.log("IMAGE FROM GALLERY===>>>", imagePath);
        callBack(imagePath.path);
    }).catch((error) => {
        console.log(error);
    })
}
const MultiImageFromGallrey = (setImages, closeSheet, setVideoNull) => {
    ImagePicker.openPicker({
        multiple: true,
        compressImageQuality: 0.5,

    }).then(async images => {
        const result = [];

        for await (const image of images) {
            const img =
            // await ImagePicker.openCropper(
            {
                mediaType: "photo",
                path: image.path,
                width: 1000,
                height: 1000,
            }
            // );
            result.push(img.path);
        }
        setImages(result)
        closeSheet()
        setVideoNull()
    }).catch((error) => {
        console.log(error);
    })

}

const ImageFromCamera = (setImages, closeSheet, setVideoNull) => {
    ImagePicker.openCamera({
        width: 1000,
        height: 1200,
        // cropping: true,
    }).then((camoImage) => {
        const result = [];
        result.push(camoImage.path)

        setImages(result)
        closeSheet()
        setVideoNull()

    }).catch((error) => {
        console.log(error);
    })
}
const VideoFromGallery = (setVideo, setImagesNull, closeSheet) => {
    ImagePicker.openPicker({
        mediaType: "video",
        multiple: true,
    }).then(async videos => {
        const result = [];

        for await (const video of videos) {
            const vido = {
                mediaType: "photo",
                path: video.path,
                width: 1000,
                height: 1000,
            }
            await result.push(vido.path);
        }
        setVideo(result)
        setImagesNull()
        closeSheet()
    }).catch((error) => {
        console.log(error);
    })
}
//Also for Object
const RemoveItemFromArray = (array, item, callbackforSetState) => {
    let tempArray = Object.assign([], array);
    let index = tempArray.indexOf(item)
    if (index > -1) {
        tempArray.splice(index, 1);
    }
    callbackforSetState(tempArray)
}
const AddORremoveFromArray = (array, item, callbackforSetState) => {
    let tempArray = Object.assign([], array);
    let index = tempArray.indexOf(item)
    if (index > -1) {
        tempArray.splice(index, 1);
    } else {
        tempArray?.push(item)
    }
    callbackforSetState(tempArray)
}
const changeFlag = (array, item, index, callbackforSetState) => {
    let tempArray = Object.assign([], array);
    item?.isSelect == true ? array[index].isSelect = false : array[index].isSelect = true
    callbackforSetState(tempArray)
}
const AddItemtoArray = (array, item, callbackforSetState) => {
    let newItem = item.trim()
    let tempArray = Object.assign([], array);
    let length = array.length
    let index = array.indexOf(newItem)
    // console.log("index-->  ", index)
    length < 1 ?
        tempArray.push(newItem) :
        index == -1 ?
            tempArray.push(newItem) :
            // FlashMessage("Already added!")
            console.log("Already added!")
    callbackforSetState(tempArray)

}
const ConcatArray = (newArray, oldArray, finalArray) => {
    let oldTemp = Object.assign([], oldArray);
    let finalArrayAfterConcat = oldTemp.concat(newArray);
    finalArray(finalArrayAfterConcat)
}
// const newConcatArray = (newArray, oldArray, finalArray) => {
//     let oldTemp = Object.assign([], oldArray);
//     let finalArrayAfterConcat = [{ ...oldArray, newArray }]
//     finalArray(finalArrayAfterConcat)
// }

// const FilterData = (oldArray, finalArray) => {
//     let oldTemp = Object.assign([], oldArray);
//     const filterData = oldTemp.filter(item => item.isFav == true);
//     finalArray(filterData);
// }

const formatBytes = (bytes, decimals = 2) => {
    console.log("bytes  => ", bytes)
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    let mbs = `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`

    let MB = mbs.split(".");
    let exactMbs = MB[0]
    console.log(MB, " MB ", exactMbs, " ", MB[1].includes("KB"))
    if (MB[1].includes("KB")) { return 4 }
    else return exactMbs
}
const markers = [
    {
        id: 1,
        latitude: 35.920834,
        longitude: 74.308334,
    },
    {
        id: 2,
        latitude: 29.143644,
        longitude: 71.257240,
    },
    {
        id: 3,
        latitude: 31.976515,
        longitude: 74.222015,
    },
    {
        id: 4,
        latitude: 30.767956,
        longitude: 72.437813,
    }
]
export {
    ImageFromCamera,
    ImageFromGallrey,
    MultiImageFromGallrey,
    VideoFromGallery,
    AddORremoveFromArray,
    AddItemtoArray,
    RemoveItemFromArray,
    ConcatArray,
    formatBytes,
    changeFlag,
    markers
}
