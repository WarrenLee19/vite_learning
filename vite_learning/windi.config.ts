import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
    attributify: true,
    //封装了flex-c的类名，接下来我们可以在业务代码直接使用这个类名
    shortcuts: {
        "flex-c": "flex justify-center items-center",
    }
});