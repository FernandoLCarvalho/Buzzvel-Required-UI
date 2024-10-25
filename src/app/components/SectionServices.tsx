import styles from '../styles/sectionServices.module.css'
import MobileApp from './sectionServices-components/mobileApp'

export default function SectionServices(){
    return(
        <section style={{padding: '2% 0', width: '100vw'}}>
           <div className={`grid ${styles.servicesContainer}`} style={{margin: '0'}}>
                <div className={`col-12 sm:col-3 ${styles.firstDiv}`} style={{padding: 0}}>
                <div className={styles.gridContainer}>
                        <img src="Rectangle 15.svg" alt="Rectangle" style={{zIndex: '-1'}} className={'backgroundImg'}/>
                        <MobileApp/>
                    </div>

                </div>
                <div className="col-12 sm:col-9" style={
                    {
                        display:'flex', justifyContent: 'center'
                    }}>
                    <h1>opa blz</h1>
                </div>
                
           </div>
        </section>
    )
}