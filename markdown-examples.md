# vitepress网站构建

This page demonstrates how to build a website and some basic knowledge I learn.
I don't want to forget it , so, I want to record it.

## 创建项目
### 安装vitepress
首先新建文件夹，打开cmd窗口
````md
pnpm add -D vitepress
````
初始化Vitepress
````md
pnpm vitepress init
````
然后code .进入项目
启动项目：
````md
pnpm run docs:dev
````

### 配置
**配置footer，在config.mjs defineConfig下面配置就可以了**
````md
//底部配置
footer: {
  copyright: "Copyright@ 2024 Roverly",
},
````

![alt text](image-1.png)

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
