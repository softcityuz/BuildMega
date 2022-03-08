import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { instance } from "./../../api/api";
import { setProjectSingle } from './../../redux/SingleProject';
import SingleProject from './SingleProject';
const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};
class SingleProjectCompanenty extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    instance
      .get("project/" + userId)
      .then((response) => this.props.setProjectSingle(response.data));
  }
  render() {
    console.log(this.props.news);
    return (
      <div>
        <SingleProject news={this.props.news} {...this.props} />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  news: state.project.news,
});
let WithDataContainerComponent = withRouter(SingleProjectCompanenty);
export default connect(mapStateToProps, { setProjectSingle })(
  WithDataContainerComponent
);
