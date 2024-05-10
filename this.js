const arr={
    name:'naseer',
    age:21,
    math:20,
    phy:20,
    sc:20,
    avg:function(){
        let avg=(this.math+this.phy+this.sc)/3;
        console.log(`${this.name} got average marks=${avg}`);
    }
}
arr.avg();

