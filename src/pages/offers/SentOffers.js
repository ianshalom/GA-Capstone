import React from 'react'
import withAuthorization from '../../components/hoc/withAuthorization'
import ServiceItem from '../../service/ServiceItem'
import { connect } from 'react-redux';
import { newMessage, newCollaboration } from '../../helpers/offers'
import { fetchSentOffers, collaborate } from '../../actions'


class SentOffers extends React.Component {

 componentDidMount() {
      const { auth } = this.props
      this.props.dispatch(fetchSentOffers(auth.user.uid))
    }

    // createCollaboration = offer => {
    //   const { auth: { user } } = this.props
      
    //   const collaboration = newCollaboration({offer, fromUser: user})
    //   const message = newMessage({offer, fromUser: user})

    //   collaborate({collaboration, message})
    //   .then(_ => alert('Collaboration has been created'))

    // }


     // { o.status === 'accepted' &&
     //                                <div>
     //                                <hr />
     //                                <button 
     //                                  onClick={() => this.createCollaboration(o)}
     //                                  className="button is-success">Collaborate</button>
     //                              </div>
     //                              }
  
    render(){
      const { offers } = this.props
        return(
             <div className="container">
                  <div className="content-wrapper">
                    <h1 className="title">Sent Offers</h1>
                    <div className="columns">
                    { offers.map(o => (
                      <div 
                        key={o.id}
                        className="column is-one-third">
                                <ServiceItem
                                  noButton
                                  className="offer-card"
                                  service={o.service}>
                                  <div className="tag is-large">
                                    {o.status}
                                  </div>
                                  <hr />
                                  <div className="service-offer">
                                    <div>
                                      <span className="label">To User:</span> {o.toUser.userProfile.fullName}
                                    </div>
                                    <div>
                                      <span className="label">Note:</span> {o.note}
                                    </div>
                                    <div>
                                      <span className="label">Price:</span> ${o.price}
                                    </div>
                                    <div>
                                      <span className="label">Time:</span> {o.time} hours
                                    </div>
                                  </div>
                                 
                                  
                                </ServiceItem>
                               </div>  
                           
                      )          
                    )
                     }
                      

                      
                    </div>
                  </div>
                </div>

            )
      }
    }

  const mapStateToProps = (state) => {
    return {
      offers: state.offers.sent
    }
  }


export default withAuthorization(connect(mapStateToProps)(SentOffers))