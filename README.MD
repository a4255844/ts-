# 运行typescript
  1) 安装node环境,npm i -g typescript
  2) 使用tsc命令查看
# 配置编译ts
  1) 使用tsc ts文件,可以对ts进行编译, -w 可以监视当前文件实现自动编译
  2) 在文件根目录创建一个文件 tsconfig.json 然后再次使用tsc就会对当前目录下的所有ts文件
     进行编译, 此时-w会监视所有文件
  ## tsconfig.json 配置文件
     1): 使用来配置编译ts