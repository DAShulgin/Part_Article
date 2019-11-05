import React from 'react';
import { getArticle, AddArticle, UpdateArticle, DeleteArticle } from '../../redux/reducers/article-reducer';
import Article from './Article';
import { connect } from 'react-redux';


class ArticleContainer extends React.Component {

  componentDidMount() {
    this.props.getArticle();
  }

  render() {
    return <Article
     articles = {this.props.articles} 
     AddArticle = {this.props.AddArticle}
     UpdateArticle = {this.props.UpdateArticle}
     DeleteArticle = {this.props.DeleteArticle}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articlePage.articles,
  }
}

export default connect(mapStateToProps, { getArticle, AddArticle, DeleteArticle, UpdateArticle } )(ArticleContainer);


