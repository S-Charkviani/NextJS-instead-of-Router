//our-domain.com/news
import Link from 'next/link';
import { Fragment } from "react";

function NewsPage(){
    return (
        <Fragment>
<h1> The News Page</h1>
<ul>
    <li>
        <Link href="/news/nextJS-is-great">NextJS Is a great Framework</Link>
    </li>
</ul>
    </Fragment>
    )
    
    
}

export default NewsPage;