import { marked } from 'marked';

export const convertToHtml = (text: string | undefined | null) => marked.parse(text || '');
