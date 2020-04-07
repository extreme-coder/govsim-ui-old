import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'

class BasePage extends React.Component {

    render() {        
        return (            
            <div id="wrapper">                        

               <Sidebar /> 
              
              <div id="content-wrapper" class="d-flex flex-column">
          
                
                <div id="content">
          
                  
                  <Header />
                            
                  
                  <div class="container-fluid">
                            
                    { this.props.children }
     
                  </div>
                  
          
                </div>
                
          
                
                <footer class="sticky-footer bg-white">
                  <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                      <span>Copyright &copy; Your Website 2019</span>
                    </div>
                  </div>
                </footer>
                
          
              </div>
                        
            </div>
            
           
        );
    }

}

export default BasePage;