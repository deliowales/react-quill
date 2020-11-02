import React from 'react';
import { QuillOptionsStatic, RangeStatic, BoundsStatic, StringMap, Sources } from 'quill';
declare type DeltaStatic = any;
declare namespace ReactQuillV2Tables {
    type Value = string | DeltaStatic;
    type Range = RangeStatic | null;
    interface QuillOptions extends QuillOptionsStatic {
        tabIndex?: number;
    }
    interface ReactQuillProps {
        bounds?: string | HTMLElement;
        children?: React.ReactElement<any>;
        className?: string;
        defaultValue?: Value;
        formats?: string[];
        id?: string;
        modules?: StringMap;
        onChange?(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void;
        onChangeSelection?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
        onFocus?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
        onBlur?(previousSelection: Range, source: Sources, editor: UnprivilegedEditor): void;
        onKeyDown?: React.EventHandler<any>;
        onKeyPress?: React.EventHandler<any>;
        onKeyUp?: React.EventHandler<any>;
        placeholder?: string;
        preserveWhitespace?: boolean;
        readOnly?: boolean;
        scrollingContainer?: string | HTMLElement;
        style?: React.CSSProperties;
        tabIndex?: number;
        theme?: string;
        value?: Value;
    }
    interface UnprivilegedEditor {
        getLength(): number;
        getText(index?: number, length?: number): string;
        getHTML(): string;
        getBounds(index: number, length?: number): BoundsStatic;
        getSelection(focus?: boolean): RangeStatic;
        getContents(index?: number, length?: number): DeltaStatic;
    }
}
export = ReactQuillV2Tables;
