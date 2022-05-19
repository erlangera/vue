const { Vue, Observer, Watcher } = VueStudy;
let obj = { data: 2 };
let arr = [1, 2, { data: 3 }, { data: "4" }];
let ob_obj = new Observer(obj);
let ob_arr = new Observer(arr);
let vm = new Vue();
let watcher = new Watcher(vm, () => obj.data, console.log);
obj.data = 3;
