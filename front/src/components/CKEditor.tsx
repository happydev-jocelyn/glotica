"use client";

import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

interface CKEditorProps {
  content?: string;
  onChange?: (content: string) => void;
}

export default function CKEditorComponent({ content = "", onChange }: CKEditorProps) {
  const editorRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [ClassicEditor, setClassicEditor] = useState(null);

  useEffect(() => {
    // 클라이언트 사이드에서만 CKEditor 로드
    const loadEditor = async () => {
      try {
        const { default: ClassicEditorModule } = await import('@ckeditor/ckeditor5-build-classic');
        setClassicEditor(() => ClassicEditorModule);
        setIsReady(true);
      } catch (error) {
        console.error('CKEditor 로드 실패:', error);
      }
    };

    loadEditor();
  }, []);

  const editorConfig = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'subscript',
        'superscript',
        'code',
        '|',
        'link',
        'insertImage',
        'insertTable',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'outdent',
        'indent',
        '|',
        'alignment',
        '|',
        'blockQuote',
        'codeBlock',
        '|',
        'specialCharacters',
        'horizontalLine',
        '|',
        'findAndReplace',
        'selectAll',
        '|',
        'sourceEditing'
      ],
      shouldNotGroupWhenFull: true
    },
    language: 'ko',
    placeholder: '여기에 글을 입력하세요...',
    fontSize: {
      options: [9, 11, 13, 'default', 17, 19, 21],
      supportAllValues: true
    },
    fontFamily: {
      supportAllValues: true
    },
    heading: {
      options: [
        { model: 'paragraph', title: '본문', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: '제목 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: '제목 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: '제목 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: '제목 4', class: 'ck-heading_heading4' },
        { model: 'heading5', view: 'h5', title: '제목 5', class: 'ck-heading_heading5' },
        { model: 'heading6', view: 'h6', title: '제목 6', class: 'ck-heading_heading6' }
      ]
    },
    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'resizeImage'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableProperties',
        'tableCellProperties'
      ]
    },
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: 'https://'
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    }
  };

  if (!isReady || !ClassicEditor) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg border border-gray-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <div className="text-gray-500">에디터 로딩 중...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="ckeditor-container">
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        data={content || '<p>Glotica Editor 시작 🎉</p>'}
        onReady={(editor) => {
          editorRef.current = editor;
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange?.(data);
        }}
        onBlur={(event, editor) => {
          // 에디터 포커스 해제 시 처리
        }}
        onFocus={(event, editor) => {
          // 에디터 포커스 시 처리
        }}
      />
    </div>
  );
}
