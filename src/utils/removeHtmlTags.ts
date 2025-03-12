export default function removeHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, ''); // 모든 HTML 태그를 제거
}
