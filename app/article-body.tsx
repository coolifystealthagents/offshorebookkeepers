import { parseArticleBody, type ArticleInline } from '../lib/content';

function InlineText({ segments }: { segments: ArticleInline[] }) {
  return <>{segments.map((segment, index) => {
    const key = `${segment.type}-${index}-${segment.value}`;
    if (segment.type === 'strong') return <strong key={key}>{segment.value}</strong>;
    if (segment.type === 'code') return <code key={key}>{segment.value}</code>;
    return <span key={key}>{segment.value}</span>;
  })}</>;
}

export function ArticleBody({ body }: { body: string }) {
  return <div className="article-body">{parseArticleBody(body).map((block, index) => {
    const key = `${block.type}-${index}`;
    if (block.type === 'heading') return <h3 key={key}><InlineText segments={block.segments}/></h3>;
    if (block.type === 'paragraph') return <p key={key}><InlineText segments={block.segments}/></p>;
    if (block.type === 'unordered-list' || block.type === 'ordered-list') {
      const List = block.type === 'ordered-list' ? 'ol' : 'ul';
      return <List className="article-body-list" key={key}>{block.items.map((item, itemIndex) => <li key={`${key}-${itemIndex}`}><InlineText segments={item}/></li>)}</List>;
    }
    return <div className="article-body-table-scroll" role="region" aria-label="Article data table. Scroll horizontally to see all columns." tabIndex={0} key={key}>
      <table className="article-body-table">
        <thead><tr>{block.header.map((cell, cellIndex) => <th scope="col" key={`${key}-head-${cellIndex}`}><InlineText segments={cell}/></th>)}</tr></thead>
        <tbody>{block.rows.map((row, rowIndex) => <tr key={`${key}-row-${rowIndex}`}>{row.map((cell, cellIndex) => cellIndex === 0
          ? <th scope="row" key={`${key}-${rowIndex}-${cellIndex}`}><InlineText segments={cell}/></th>
          : <td key={`${key}-${rowIndex}-${cellIndex}`}><InlineText segments={cell}/></td>)}</tr>)}</tbody>
      </table>
      <span className="scroll-cue">Swipe or scroll to read every column.</span>
    </div>;
  })}</div>;
}
