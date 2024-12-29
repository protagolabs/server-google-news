<div align="center">
 <h1><img src="public/server-google-news.svg" width="80px"><br/>Google News MCP Server</h1>
 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/MCP-Server-blue?style=flat"/>
 <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=flat"/>
</div>
<br/>

一个基于SERP API集成的Model Context Protocol(MCP)服务器实现，提供Google News搜索功能。能自动对新闻结果进行分类，支持多语言和地区。

[English](./README.md) | 简体中文

https://github.com/user-attachments/assets/1cc71c27-f840-4c94-9ab5-460d84ba4779


![屏幕截图 2024-12-30 021446](https://github.com/user-attachments/assets/34985fac-a529-4aac-a77d-b0b93f70d0f7)

![屏幕截图 2024-12-30 021524](https://github.com/user-attachments/assets/6d1d3069-db04-421e-83b9-6ecdbce4847e)

![屏幕截图 2024-12-30 021914](https://github.com/user-attachments/assets/16889a09-c05d-47dc-b3fe-5ea3771e059d)

![屏幕截图 2024-12-30 021941](https://github.com/user-attachments/assets/da20e7a6-f2e8-4aec-bab9-f19322d0f798)

# ✨ 特性

### 🔍 灵活的搜索选项
提供全面的搜索能力，包括基于关键词的搜索、主题搜索、出版物过滤和故事覆盖度分析。

### 🌐 全球覆盖
通过可配置的语言和国家代码支持多语言和地区。

### 📊 智能分类
自动将新闻结果分类到AI与科技、商业、科研、医疗等领域。

### 🔀 多样的结果类型
处理各种新闻结果类型，包括头条、故事、相关主题和菜单链接。

### 🛠️ 健壮的错误处理
全面的API错误和无效输入处理，提供友好的错误提示。

### 🌍 语言支持
自动回退到英语作为不支持语言的替代，并提供适当的用户通知。

# 🔑 SERP API申请教程

在开始使用前，你需要获取SERP API密钥。以下是详细步骤：

1. 访问[SERP API官网](https://serpapi.com/)并注册账号

2. 注册完成后，进入Dashboard页面：
   - 找到"API Key"部分
   - 复制显示的API密钥
   - 新注册用户可获得100次免费API调用

3. API使用说明：
   - 免费账户每月有100次调用限额
   - 付费计划起价为$50/月，提供5000次调用
   - API调用按成功请求计费
   - 支持多种付款方式：信用卡、PayPal等

4. 使用限制：
   - 请求频率限制：2次/秒
   - IP限制：无
   - 并发请求数：5
   - 响应缓存时间：1小时

# 🚀 快速开始

1. 安装依赖：
```bash
npm install
```

2. 配置环境：
修改你的`claude_desktop_config.json`文件，添加以下内容（根据你的系统调整路径）：
```json
    "google-news": {
      "command": "D:\\Program\\nvm\\node.exe",
      "args": [
        "D:\\github_repository\\path_to\\build\\index.js"
      ],
      "env": {
        "SERP_API_KEY": "your-api-key"
      }
    }
```

3. 构建服务器：
```bash
npm run build
```

4. 启动服务器：
```bash
npm start
```

## 常见问题

1. API密钥无效
- 检查`claude_desktop_config.json`中的API密钥是否正确配置
- 确认API密钥在SERP API后台是否处于激活状态

2. 请求失败
- 检查网络连接
- 确认未超过API调用限额
- 验证请求参数格式是否正确

# 💻 技术栈
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-SDK-blue?style=for-the-badge)

# 📖 API文档

服务器实现了Model Context Protocol，提供Google News搜索工具，支持以下参数：

- `q`: 搜索查询字符串
- `gl`: 国家代码（如'us'、'cn'）
- `hl`: 语言代码（如'en'、'zh-cn'）
- `topic_token`: 特定新闻主题的token
- `publication_token`: 特定出版商的token
- `story_token`: 故事全面报道的token
- `section_token`: 特定版块的token

# 🔧 开发

```bash
# 使用热重载运行开发模式
npm run dev

# 运行代码检查
npm run lint

# 运行测试
npm run test
```

# 📝 许可证

本项目采用[MIT许可证](./LICENSE)。