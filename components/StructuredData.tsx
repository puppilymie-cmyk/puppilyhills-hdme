// JSON-LD構造化データを<script>として埋め込む共通コンポーネント。
// Google検索だけでなく生成AI(ChatGPT等)による内容理解も意識しています。
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
