const Geo = (AMap: any) => {
    return new Promise((resolve, rejects) => {
        const geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 5000,
            // 定位按钮的停靠位置的偏移量
            offset: [10, 20],
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            position: 'RB',
        })
        geolocation.getCurrentPosition(function (status: any, result: any) {
            if (status == 'complete') {
                resolve(result)
            } else {
                rejects(result)
            }
        })
    })
}

export default Geo
