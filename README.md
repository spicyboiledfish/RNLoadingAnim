# RNLoadingAnim
Loading Animations by React Native

![record](https://github.com/swordrain/RNLoadingAnim/blob/master/recording.gif)




注：Loading效果1代码改成了setInterval方式循环，这样在componentWillUnmount的时候可以做清理，其他效果没有使用该方式，存在内存泄漏问题


>颜色的改变似乎只能通过rgb的方式

```
backgroundColor: this.state.color.interpolate({
  inputRange: [0, 1],
  outputRange: ['rgb(0, 0, 0)', 'rgb(255, 0, 0)']
}
```
