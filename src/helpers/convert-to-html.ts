import { marked } from 'marked';

export const convertToHtml = (text: string | undefined | null): string =>
	marked.parse(text || '', { sanitize: false });
