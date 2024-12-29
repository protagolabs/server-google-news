// 定义Google News API的类型
export interface NewsResult {
  position: number;
  title: string;
  source: {
    name: string;
    icon?: string;
    authors?: string[];
  };
  link: string;
  thumbnail?: string;
  thumbnail_small?: string;
  date?: string;
  snippet?: string;
}

export interface GoogleNewsSearchArgs {
  q?: string;                // 搜索关键词
  gl?: string;              // 国家代码
  hl?: string;              // 语言代码
  topic_token?: string;     // 主题token
  publication_token?: string; // 出版物token
  story_token?: string;     // 故事token
  section_token?: string;   // 分区token
}

export function isValidGoogleNewsSearchArgs(args: unknown): args is GoogleNewsSearchArgs {
  if (!args || typeof args !== "object") {
    return false;
  }

  const typedArgs = args as Record<string, unknown>;

  // 检查所有可选字段的类型
  if (typedArgs.q !== undefined && typeof typedArgs.q !== "string") return false;
  if (typedArgs.gl !== undefined && typeof typedArgs.gl !== "string") return false;
  if (typedArgs.hl !== undefined && typeof typedArgs.hl !== "string") return false;
  if (typedArgs.topic_token !== undefined && typeof typedArgs.topic_token !== "string") return false;
  if (typedArgs.publication_token !== undefined && typeof typedArgs.publication_token !== "string") return false;
  if (typedArgs.story_token !== undefined && typeof typedArgs.story_token !== "string") return false;
  if (typedArgs.section_token !== undefined && typeof typedArgs.section_token !== "string") return false;

  return true;
}

export interface NewsArticle {
  title: string;
  source: string;
  link: string;
  date?: string;
  snippet?: string;
  authors?: string[];
}

export interface NewsCategory {
  name: string;
  articles: NewsArticle[];
  topic_token?: string;
}

export interface MenuLink {
  title: string;
  topic_token: string;
  serpapi_link: string;
}

export interface FormattedNewsResponse {
  categories: NewsCategory[];
  menu_links?: MenuLink[];
  timestamp: string;
}