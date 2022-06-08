let flag = false;
function toggle() {
  import("../../dist/vue.study.esm.js").then((module) => {
    const { toggleDebugger } = module;
    toggleDebugger(flag = !flag);
  });
}

function run() {
  import("../../dist/vue.study.esm.js").then((module) => {
    const { Vue, Observer, Watcher } = module;

    // let arr = [1, 2, { data: 3 }, { data: "4" }];
    // let ob_arr = new Observer(arr);
    let vm = {
      _watchers: [],
      _data: {
        obj: {
          a: 2,
        },
      },
    };
    const { _data: data } = vm;
    new Observer(data);
    new Watcher(vm, () => data.obj.a, console.log, true);
    data.obj = {
      a: 3,
    };
  });
}
