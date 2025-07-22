# Google News MCP Server

A Model Context Protocol (MCP) server for Google News search via SerpAPI.

## 🚀 Quick Start

### Run with npx
```bash
npx @netmind/google-news-server
```

### Development Setup
1. Install dependencies:
```bash
npm install
```

2. Build the server:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

## 🔧 MCP Configuration

Add to your `claude_desktop_config.json`:
```json
"google-news": {
  "command": "npx",
  "args": ["@netmind/google-news-server"],
  "env": {
    "SERP_API_KEY": "your-api-key"
  }
}
```

## 📝 License
MIT
