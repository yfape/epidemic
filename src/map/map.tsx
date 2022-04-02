import React, { useState, useEffect } from 'react'
import Style from './map.module.css'
import AMapLoader from '@amap/amap-jsapi-loader'
import Geo from './components/geo'

const Map = () => {
    const [map, setMap] = useState({})
    const windowHeight = window.screen.availHeight
    let centerpos = [104.065864, 30.657468]

    useEffect(() => {
        AMapLoader.load({
            key: 'f9e296f0d73a522e37fb0edc3a4318af', // 申请好的Web端开发者Key，首次调用 load 时必填
            version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ['AMap.Geolocation'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        })
            .then((AMap) => {
                Geo(AMap)
                    .then((res: any) => {
                        console.log(res)
                        centerpos = res.position?.lng
                            ? [res.position.lng, res.position.lat]
                            : centerpos
                        setMap(
                            new AMap.Map('container', {
                                //设置地图容器id
                                viewMode: '3D', //是否为3D地图模式
                                zoom: 12, //初始化地图级别
                                center: centerpos, //初始化地图中心点位置
                            })
                        )
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <div
            id='container'
            className={`map ${Style.container}`}
            style={{ height: `${windowHeight}px` }}
        ></div>
    )
}

export default Map
