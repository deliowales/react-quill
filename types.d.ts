import * as React from "react";
import * as Quill from "quill";

declare namespace ReactQuillV2Tables {
	export interface UnprivilegedEditor {
		getLength(): number;
		getText(index?: number, length?: number): string;
		getHTML(): string;
		getBounds(index: number, length?: number): Quill.BoundsStatic;
		getSelection(focus?: boolean): Quill.RangeStatic;
		getContents(index?: number, length?: number): any;
	}

	export interface ComponentProps {
		id?: string;
		className?: string;
		theme?: string;
		style?: React.CSSProperties;
		readOnly?: boolean;
		value?: string | any;
		defaultValue?: string | any;
		placeholder?: string;
		tabIndex?: number;
		bounds?: string | HTMLElement;
		scrollingContainer?: string | HTMLElement;
		onChange?: (
			content: string,
			delta: any,
			source: Quill.Sources,
			editor: UnprivilegedEditor
		) => void;
		onChangeSelection?: (
			range: Quill.RangeStatic,
			source: Quill.Sources,
			editor: UnprivilegedEditor
		) => void;
		onFocus?: (
			range: Quill.RangeStatic,
			source: Quill.Sources,
			editor: UnprivilegedEditor
		) => void;
		onBlur?: (
			previousRange: Quill.RangeStatic,
			source: Quill.Sources,
			editor: UnprivilegedEditor
		) => void;
		onKeyPress?: React.EventHandler<any>;
		onKeyDown?: React.EventHandler<any>;
		onKeyUp?: React.EventHandler<any>;
		formats?: string[];
		children?: React.ReactElement<any>;
		modules?: Quill.StringMap;
		preserveWhitespace?: boolean;

		/** @deprecated
		 * The `toolbar` prop has been deprecated. Use `modules.toolbar` instead.
		 * See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.
		 * */

		toolbar?: never;
		/** @deprecated
		 * The `styles` prop has been deprecated. Use custom stylesheets instead.
		 * See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100
		 */

		styles?: never;
		/**
		 * @deprecated
		 * The `pollInterval` property does not have any effect anymore.
		 * You can safely remove it from your props.
		 * See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.
		 */
		pollInterval?: never;
	}

	export interface Mixin {
		createEditor(
			element: HTMLElement,
			config: Quill.QuillOptionsStatic
		): Quill.Quill;
		hookEditor(editor: Quill.Quill): void;
		unhookEditor(editor: Quill.Quill): void;
		setEditorReadOnly(editor: Quill.Quill, value: boolean): void;
		setEditorContents(editor: Quill.Quill, value: any | string): void;
		setEditorSelection(editor: Quill.Quill, range: Quill.RangeStatic): void;
		makeUnprivilegedEditor(editor: Quill.Quill): UnprivilegedEditor;
	}
}

export default class ReactQuillV2Tables extends React.Component<ReactQuillV2Tables.ComponentProps> {
	focus(): void;
	blur(): void;
	getEditor(): Quill.Quill;
}

export { Quill } from "quill";
