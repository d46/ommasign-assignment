/*
  Logs implemented as a class to collect 
  errors or warnings for advanced feedback 
  to the customers
*/
class Logger {
  warn(callstack) {
    this.log({callstack, type:1});
  }

  error(callstack) {
    this.log({callstack, type:1});
  }

  async log({callstack, type = 0}) {
    console.log(callstack);
  }
}

export default new Logger();
