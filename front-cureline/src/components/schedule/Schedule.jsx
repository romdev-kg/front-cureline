import React, { useState, useEffect } from "react";
import "./Schedule.css";
import "../../App.css";
import '../../bootstrap.min.css';
import '../../animate.min.css';

const Schedule = () => {

    return (
        <div>
            <section class="schedule">
                <div class="container">
                    <div class="schedule-inner">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 ">
                                <div class="single-schedule first">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="fa fa-ambulance"></i>
                                        </div>
                                        <div class="single-content">
                                            <h4>БЕРЕМЕННОСТЬ И ПЛАНИРОВАНИЕ РЕБЕНКА</h4>
                                            <p>Неинвазивные пренатальные тесты — НИПТ</p>
                                            <a href="#">Читать ещё<i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="single-schedule middle">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="icofont-prescription"></i>
                                        </div>
                                        <div class="single-content">
                                            <h4>БЕРЕМЕННОСТЬ И ПЛАНИРОВАНИЕ РЕБЕНКА</h4>
                                            <p>Неинвазивные пренатальные тесты — НИПТ</p>
                                            <a href="#">Читать ещё<i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-12">
                                <div class="single-schedule last">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="iфcofont-ui-clock"></i>
                                        </div>
                                        <div class="single-content">
                                            <h4>Часы работы</h4>
                                            <ul class="time-sidual">
                                                <li class="day">Понедельник  - Пятница  <span>8.00-20.00</span></li>
                                                <li class="day">Суббота <span>9.00-18.30</span></li>
                                                <li class="day">Понедельник - четверг
                                                    <span>9.00-15.00</span></li>
                                            </ul>
                                            <a href="#">Читать ещё<i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Schedule;