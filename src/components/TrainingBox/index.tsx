// import { TrainingList } from "../TrainingList"
//import { Container } from "./style"
import { TrainingForm } from "../TrainingForm";
import { Container } from "./style";


export function TrainingBox({ training }: any) {



  //Imprime o treino
  return (
    <Container>

      <>
        <div className="box">


          <div id="carouselExampleIndicators" className="carousel slide" >
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" ></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" ></li>
            </ol>
            <div className="carousel-inner">

              {training[0].exercise.map((ex: any) => {
                const id: any = ex.id;


                return (
                  <div className="carousel-item active item" key={id}>
                    <h1>{ex.name}</h1>
                    <img src={`.${ex.image}`} />
                    <div className="form">

                      <TrainingForm training={training} id={id}>

                      </TrainingForm>

                    </div>


                  </div>
                )
              })}


            </div>


          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
          {/* //Inserção de dados */}




        </div>




      </>
    </Container >

  )
}
