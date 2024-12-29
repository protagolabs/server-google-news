<div align="center">
 <h1>Google News MCP Server</h1>
 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/MCP-Server-blue?style=flat"/>
 <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=flat"/>
</div>
<br/>

A Model Context Protocol (MCP) server implementation that provides Google News search capabilities via SerpAPI integration. Automatically categorizes news results and supports multiple languages and regions.

# ✨ Features

### 🔍 Flexible Search Options
Comprehensive search capabilities including query-based search, topic search, publication filtering and story coverage.

### 🌐 Global Coverage
Supports multiple languages and regions through configurable language and country codes.

### 📊 Smart Categorization 
Automatically categorizes news results into topics like AI & Technology, Business, Science & Research, and Healthcare.

### 🔀 Multiple Result Types
Handles various news result types including headlines, stories, related topics and menu links.

### 🛠️ Robust Error Handling
Comprehensive error handling for API failures and invalid inputs, with helpful error messages.

### 🌍 Language Support
Automatic fallback to English for unsupported language codes with appropriate user notifications.

# 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
Modify your `claude_desktop_config.json` with the following content (adjust paths according to your system):
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

3. Build the server:
```bash
npm run build
```

4. Start the server:
```bash
npm start
```

# 💻 Tech Stack
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-SDK-blue?style=for-the-badge)

# 📖 API Documentation

The server implements the Model Context Protocol and exposes a Google News search tool with the following parameters:

- `q`: Search query string
- `gl`: Country code (e.g., 'us', 'uk')
- `hl`: Language code (e.g., 'en', 'es')
- `topic_token`: Token for specific news topics
- `publication_token`: Token for specific publishers
- `story_token`: Token for full coverage of a story
- `section_token`: Token for specific sections

For full API details, see the [Google News API Documentation](Google_News_API.md).

# 🔧 Development

```bash
# Run in development mode with hot reload
npm run dev

# Run linting
npm run lint

# Run tests
npm run test
```

# 📝 License

This project is MIT licensed.
