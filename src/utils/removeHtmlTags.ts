/**
 * 정규표현식을 사용해 HTML 태그를 제거하는 함수
 * @param text - HTML 태그가 포함된 문자열
 * @returns HTML 태그가 제거된 문자열
 */
export default function removeHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}
