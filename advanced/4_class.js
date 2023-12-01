class Mobile{
    constructor(series, version){
        this.series = series
        this.version = version
    }

    mobileList = [];

    getInfo(){
        return {series: this.series, version: this.version}
    }

    enrollMobile(series){
        this.mobileList.push(series)
    }

    getMobile(){
        return this.mobileList
    }
}

module.exports = Mobile;