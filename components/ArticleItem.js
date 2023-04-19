import Link from 'next/link';
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
    return(
        <Link href="article/[id]" as ={`/article/${article.id}`}>
            <div className={articleStyles.card}>
                <h3>
                    {article.title} &arr;
                </h3>
                <p>
                    {article.body}
                </p>
            </div>
        </Link>
    )
}

export default ArticleItem;