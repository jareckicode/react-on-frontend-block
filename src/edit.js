import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __(
				'React On Frontend Block – hello from the editor!',
				'react-on-frontend-block'
			) }
		</p>
	);
}