<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class select extends Component
{


    public $name;
    public $options;
    public $default;

    /**
     * Create a new component instance.
     */
    public function __construct($name, $options, $default, $attributes = [])
    {
        //
        $this->name = $name;
        $this->options = is_array($options) ? $options : array_column($options->toArray(), "name", "id");
        $this->default = $default;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        #print_r($this->attributes);  # <-- NOTHING!!!!
        $html = "";
        foreach ($this->options as $key => $label) {
            $sel = $key == $this->default ? " selected" : "";
            $html .= "<option$sel value='$key'>$label</option>";
        }
        return "<select name='$this->name' $this->attributes>$html</select>";
    }
}
