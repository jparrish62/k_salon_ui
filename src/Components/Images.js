import React, {Component} from 'react';

class Images extends Component {

  render(){
      console.log('Cap',this.props.cap);
      console.log('image', this.props.images);
    return(
    <div>
      <div className="col-md-3 col-sm-6">
        <div className="card wow zoomIn">
          <div className="card-block p-05 ">
            <div className="withripple zoom-img">
              <a href={this.props.images}data-lightbox="gallery" data-title={this.props.cap}>
                <img src={this.props.images} alt="" className="img-responsive"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Images;
