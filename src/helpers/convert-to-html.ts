import marked from 'marked';

export function convertToHtml(text: string | undefined | null) {
	return marked(text || '');
}
