
function validateForm() {
  var form = document.getElementById('registrationForm');

  // Έλεγχος ταυτότητας κωδικού πρόσβασης
  var password = form.getElementById('password').value;
  var confirmPassword = form.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    alert('Οι κωδικοί πρόσβασης δεν ταιριάζουν.');
    return false;
  }
  




  // Ενεργοποίηση ελέγχου για το email
  var emailInput = form.elements['email'];
  if (!emailInput.checkValidity()) {
    alert('Παρακαλώ εισάγετε ένα έγκυρο email.');
    return false;
  }

  // Έλεγχος αν έχουν συμπληρωθεί όλα τα υποχρεωτικά πεδία
  var requiredInputs = form.querySelectorAll('input[required]');
  for (var i = 0; i < requiredInputs.length; i++) {
    if (!requiredInputs[i].value) {
      alert('Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.');
      return false;
    }
  }

  // Εάν όλα είναι εντάξει, επιστροφή true για υποβολή της φόρμας
  return true;
}



