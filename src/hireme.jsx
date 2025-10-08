import './App.css';
function Hireeme(){
    return(
        <div>
<div class="form-container">
      <form class="form" action="https://formsubmit.co/sanjusinghkk3498@gmail.com" method="POST" >
        <div class="form-group">
            
          <label for="email">Contact Number</label>
          <input type="number" id="email" name="number" required=""></input>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>

        </div>
    );
}
export default Hireeme;