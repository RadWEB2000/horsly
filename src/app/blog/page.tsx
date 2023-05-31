import { RegularArticleCard as Article} from "@/utils/cards";
import { articles } from "@/static/articles";

export default function BlogPage(){
    return (
        <div>
            <main
                className="w-230 max-w-9/10 pt-10 pb-5 mx-auto border-x border-x-brand-stone/0 space-y-4 @container/blog-cards flex flex-col items-center"
            >
                {
                    articles.map(({...props}) => {
                        return (
                            <Article
                                key={`article-card-${props.title}`}
                                {...props}
                            />
                        )
                    })
                }
            </main>
        </div>
    )
}