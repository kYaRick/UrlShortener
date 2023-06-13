import firestore from "firebase/firestore";

import { initializeApp } from "firebase/app";
import firebaseConfig from "../util/firebase-config";

class FirebaseService {
  private static _I = new FirebaseService();
  public static get I() {
    return this._I;
  }

  /**
   * Firebase application reference
   */
  private _app!: import("@firebase/app").FirebaseApp;

  /**
   * Initializes Firebase using {@link firebaseConfig}
   */
  async init() {
    this._app = initializeApp(firebaseConfig);

  }
}

export default FirebaseService;
