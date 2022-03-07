import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import SingleNews from "./SingleNews";
import { setNewsSingle } from './../../redux/SingleNews';
import { instance } from './../../api/api';
const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};
class SingleCompanenty extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    instance.get("news/" + userId)
      .then((response) => this.props.setNewsSingle(response.data));
  }
  render() {
      console.log(this.props.news);
    return (
      <div>
        <SingleNews news={this.props.news} {...this.props} />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  news: state.news.news,
});
let WithDataContainerComponent = withRouter(SingleCompanenty);
export default connect(mapStateToProps, { setNewsSingle })(
  WithDataContainerComponent
);