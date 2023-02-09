### 为什么在vite build命令执行之前要先执行tsc呢
tsc 作为 TypeScript 的官方编译命令，可以用来编译 TypeScript 代码并进行类型检查，而这里的作用主要是用来做类型检查

```{
"compilerOptions": {
// 省略其他配置
// 1. noEmit 表示只做类型检查，而不会输出产物文件
// 2. 这行配置与 tsc --noEmit 命令等效
"noEmit": true,
},
}
```