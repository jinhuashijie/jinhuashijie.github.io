        _setGrid: function(b, a) {
            if (b) {//如果这个函数存在b这个参数
                var c = this, //c就是被触发的这个元素
                e = this.options  , //被触发的元素有options属性，被触发的应该是一个对象
                f = d.extend({  //d可能是一个单独的对象，也可能是一个对象的属性；
                    parms: e.parms
                }, e.grid);
                c.innerGrid && c.innerGrid.win && (c.innerGrid.win._removeDialog(),
                    //这个方法不知道在干嘛；
                c.innerGrid.win = null);
                this.unbind("buttonClick");//给被触发的元素解绑了一个事件
                c.includeControls = [];//给被触发的元素增加了一个属性，值为数组；
                null != a && (f.isSingleCheck = a,f.checkbox = !a);
                this.bind("buttonClick", function() {//给被触发的元素从新绑定了事件
                    if (!c.popupFn || null != a) {
                        f.initParam = e.initParam;
                        var b = e.condition, g = e.valueField, k = e.textField, l = e.split, n = e.searchClick, m;
                        try {
                            m = c.getData()
                        } catch (q) {
                            m = null
                        }
                        c.popupFn = d.ligerui.getPopupFn({
                            grid: f,
                            condition: b,
                            valueField: g,
                            textField: k,
                            split: l,
                            searchClick: n,
                            lastSelected: m,
                            onSelect: function(a) {
                                c.setCurrentEditingRow();
                                0 != c.trigger("select", a) && (e.grid.checkbox ? (c.addValue(a.value, a.text),
                                c.removeValue(a.remvoeValue, a.remvoeText)) : (c.setValue(a.value),
                                c.setText(a.text)),
                                c.trigger("selected", a))
                            },
                            selectInit: e.selectInit
                        }, c)
                    } else if (void 0 != e.needReload ? e.needReload : 1)
                        b = c.popupFn(),
                        b.options.initParam = e.initParam,
                        b._clearGrid(),
                        b.reload(1);
                    (b = c.popupFn()) && (this.innerGrid = b)
                })
            }
        }